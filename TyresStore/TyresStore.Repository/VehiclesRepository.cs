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
	public class VehiclesRepository : IVehiclesRepository
	{
		TyresStoreContext context = new TyresStoreContext();

		public Vehicle GetVehicleById(int vehicleId)
		{
			return context.Vehicles.FirstOrDefault(x => x.ID == vehicleId);
		}

		public List<Vehicle> GetVehicles()
		{
			return context.Vehicles.ToList();
		}
	}

}
