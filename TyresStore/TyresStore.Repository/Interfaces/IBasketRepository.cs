using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TyresStore.Repository.Models;

namespace TyresStore.Repository.Interfaces
{
    interface IBasketRepository
    {
        void StoreTyre(int tyreId, string description, string price);

       List<Basket> GetItems();

       bool TyreAlreadyAdded(int itemId);

       void RemoveItem(int itemId);
    }
}
