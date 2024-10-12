using Brickly.DAL.DbContext;
using Brickly.DAL.Repository.Contract;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System.Linq.Expressions;

namespace Brickly.DAL.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly IMongoCollection<T> collection;

        public GenericRepository(MongoDbContext mongoDbContext)
        {
            collection = mongoDbContext.GetCollection<T>();
        }

        /// <summary>
        /// Método para crear un nuevo documento en la colección.
        /// </summary>
        /// <param name="entity">La entidad a crear.</param>
        /// <returns>Tarea asíncrona que representa la operación.</returns>
        /// <exception cref="Exception">Lanza una excepción si ocurre un error al crear el documento.</exception>
        public async Task CreateAsync(T entity)
        {
            try
            {
                await collection.InsertOneAsync(entity);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al crear el documento: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Método para eliminar un documento de la colección usando su ID.
        /// </summary>
        /// <param name="id">El ID del documento a eliminar.</param>
        /// <returns>Tarea asíncrona que representa la operación.</returns>
        /// <exception cref="Exception">Lanza una excepción si ocurre un error al eliminar el documento.</exception>
        public async Task DeleteAsync(string id)
        {
            try
            {
                var objectId = new ObjectId(id); // Convertir a ObjectId si es necesario
                var result = await collection.DeleteOneAsync(Builders<T>.Filter.Eq("_id", objectId));
                if (result.DeletedCount == 0)
                {
                    throw new Exception("No se encontró el documento a eliminar.");
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al eliminar el documento: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Método para obtener todos los documentos de la colección.
        /// </summary>
        /// <returns>Una lista de documentos de tipo T.</returns>
        /// <exception cref="Exception">Lanza una excepción si ocurre un error al obtener los documentos.</exception>
        public async Task<List<T>> GetAllAsync()
        {
            try
            {
                return await collection.Find(new BsonDocument()).ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al obtener todos los documentos: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Método para obtener un documento basado en una condición específica.
        /// </summary>
        /// <param name="predicate">La condición para filtrar los documentos.</param>
        /// <returns>El documento que cumple con la condición.</returns>
        /// <exception cref="Exception">Lanza una excepción si ocurre un error al obtener el documento.</exception>
        public async Task<T> GetByConditionAsync(Expression<Func<T, bool>> predicate)
        {
            try
            {
                // Utilizamos AsQueryable para aplicar el predicado de búsqueda
                return await collection.AsQueryable().FirstOrDefaultAsync(predicate);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al obtener el documento por condición: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Método para obtener un documento específico usando su ID.
        /// </summary>
        /// <param name="id">El ID del documento a obtener.</param>
        /// <returns>El documento encontrado de tipo T.</returns>
        /// <exception cref="Exception">Lanza una excepción si ocurre un error al obtener el documento.</exception>
        public async Task<T> GetByIdAsync(string id)
        {
            try
            {
                var objectId = new ObjectId(id);
                return await collection.Find(Builders<T>.Filter.Eq("_id", objectId)).FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al obtener el documento: {ex.Message}", ex);
            }
        }

        /// <summary>
        /// Método para actualizar un documento existente en la colección.
        /// </summary>
        /// <param name="id">El ID del documento a actualizar.</param>
        /// <param name="entity">La nueva entidad que reemplazará al documento existente.</param>
        /// <returns>Tarea asíncrona que representa la operación.</returns>
        /// <exception cref="Exception">Lanza una excepción si ocurre un error al actualizar el documento.</exception>
        public async Task UpdateAsync(string id, T entity)
        {
            try
            {
                var objectId = new ObjectId(id); // Convertir a ObjectId si es necesario

                var propertyInfo = entity.GetType().GetProperty("_id");
                
                if (propertyInfo != null)
                {
                    propertyInfo.SetValue(entity, objectId); // Asegurarse de que el _id esté correcto
                }

                var result = await collection.ReplaceOneAsync(Builders<T>.Filter.Eq("_id", objectId), entity);
                if (result.MatchedCount == 0)
                {
                    throw new Exception("No se encontró el documento a actualizar.");
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"Error al actualizar el documento: {ex.Message}", ex);
            }
        }
    }
}
