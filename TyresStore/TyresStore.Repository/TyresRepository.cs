using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TyresStore.Repository.Interfaces;
using TyresStore.Repository.Models;

namespace TyresStore.Repository
{
	public class TyresRepository : ITyresRepository
	{
		TyresStoreContext context = new TyresStoreContext();
		public Tyre GetTyreById(int tyreId)
		{
			return context.Tyres.FirstOrDefault(x => x.ID == tyreId);
		}

		public List<Tyre> GetTyres()
		{
			return context.Tyres.ToList();
		}

		public List<Tyre> GetTyresByVehicleId(int vehicleId)
		{
			return context.Tyres.Where(t => t.VehicleId == vehicleId).ToList();
		}
	}

}
