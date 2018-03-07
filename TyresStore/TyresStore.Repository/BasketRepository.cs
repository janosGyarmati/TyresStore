using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TyresStore.Repository.Interfaces;
using TyresStore.Repository.Models;

namespace TyresStore.Repository
{
    public class BasketRepository : IBasketRepository
    {
        TyresStoreContext DbContext = new TyresStoreContext();

        public void StoreTyre(int tyreId, string description, string price )
        {
            Basket item = new Basket();
            item.TyreId = tyreId;
            item.Description = description;
            item.Price = price;
            item.AddedDate = new DateTime().ToShortDateString() + new DateTime().ToShortDateString();

            DbContext.BasketItems.Add(item);
            DbContext.SaveChanges();
        }

        public List <Basket> GetItems()
        {
            return DbContext.BasketItems.ToList();
        }

        public bool TyreAlreadyAdded(int tyreId)
        {
            List<Basket> items = this.GetItems();

            var item = items.SingleOrDefault(x => x.TyreId == tyreId);

            return item != null;
        }

        public void RemoveItem (int itemId)
        {
            var item = DbContext.BasketItems.SingleOrDefault(x => x.ID == itemId);

            DbContext.BasketItems.Remove(item);
            DbContext.SaveChanges();
        }
    }
}
