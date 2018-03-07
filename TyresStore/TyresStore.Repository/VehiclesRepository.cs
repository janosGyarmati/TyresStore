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
		TyresStoreContext DbContext = new TyresStoreContext();

        

		public Vehicle GetVehicleById(int vehicleId)
		{
			return DbContext.Vehicles.FirstOrDefault(x => x.ID == vehicleId);
		}

		public List<Vehicle> GetVehicles()
		{
			return DbContext.Vehicles.ToList();
		}

		//public void RemoveVehicleById(int vehicleId)
		//{
		//	var vehicle = context.Vehicles.FirstOrDefault(x => x.ID == vehicleId);
		//	context.Vehicles.Remove(vehicle);
		//	context.SaveChanges();
		//}
	}

}
