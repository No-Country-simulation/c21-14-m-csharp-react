using MongoDB.Bson;
using System.Linq.Expressions;

namespace Brickly.DAL.Repository.Contract
{
    public interface IGenericRepository<T> where T : class
    {
        Task<List<T>> GetAllAsync();
        Task<T> GetByIdAsync(string id);
        Task CreateAsync(T entity);
        Task UpdateAsync(string id, T entity);
        Task DeleteAsync(string id);
        Task<T> GetByConditionAsync(Expression<Func<T, bool>> predicate);
    }
}
