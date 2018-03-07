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
		TyresStoreContext DbContext = new TyresStoreContext();
		public Tyre GetTyreById(int tyreId)
		{
			return DbContext.Tyres.FirstOrDefault(x => x.ID == tyreId);
		}

		public List<Tyre> GetTyres()
		{
			return DbContext.Tyres.ToList();
		}

		public List<Tyre> GetTyresByVehicleId(int vehicleId)
		{
			return DbContext.Tyres.Where(t => t.VehicleId == vehicleId).ToList();
		}
	}

}
