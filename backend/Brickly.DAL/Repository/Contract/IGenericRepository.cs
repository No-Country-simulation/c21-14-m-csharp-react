using MongoDB.Bson;

namespace Brickly.DAL.Repository.Contract
{
    public interface IGenericRepository<T> where T : class
    {
        Task<List<T>> GetAllAsync();
        Task<T> GetByIdAsync(ObjectId id);
        Task CreateAsync(T entity);
        Task UpdateAsync(ObjectId id, T entity);
        Task DeleteAsync(ObjectId id);
    }
}
