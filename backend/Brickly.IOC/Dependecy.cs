using Brickly.DAL;
using MongoDB.Driver;
using Microsoft.Extensions.DependencyInjection;
using Brickly.DAL.Repository.Contract;
using Brickly.DAL.Repository;
using Brickly.UTILIY;
using Brickly.LOGIC.Services.Contract.DocumentTypeService;
using Brickly.LOGIC.Services;
using Brickly.MODEL;
using Brickly.DAL.DbContext;
using Brickly.LOGIC.Services.Contract.AdminService;


namespace Brickly.IOC
{
    public static class Dependecy
    {
        public static void InyectionDependencyConnctionDB(this IServiceCollection services)
        {
            // Obtener las variables del archivo .env
            var mongoDbConnectionString = Environment.GetEnvironmentVariable("MONGODB_CONNECTION_STRING");
            var mongoDbName = Environment.GetEnvironmentVariable("MONGODB_NAME");

            // Validar si las variables de conexión son nulas o están vacías
            if (string.IsNullOrWhiteSpace(mongoDbConnectionString))
            {
                throw new InvalidOperationException("La cadena de conexión a MongoDB no está configurada.");
            }

            if (string.IsNullOrWhiteSpace(mongoDbName))
            {
                throw new InvalidOperationException("El nombre de la base de datos de MongoDB no está configurado.");
            }

            // Crear el cliente de MongoDB
            var mongoClient = new MongoClient(mongoDbConnectionString);

            // Registrar el cliente de MongoDB como singleton
            services.AddSingleton<IMongoClient>(mongoClient);

            // Registrar MongoDbContext como singleton y pasar el cliente y el nombre de la base de datos
            services.AddSingleton(sp =>
            {
                var client = sp.GetRequiredService<IMongoClient>();
                return new MongoDbContext(client, mongoDbName);
            });

            // Registra el repositorio genérico
            services.AddTransient(typeof(IGenericRepository<>), typeof(GenericRepository<>));

            services.AddScoped<IDocumentTypeService, DocumentTypeService>();
            services.AddScoped<IAdminService, AdminService>();

            // Registrar AutoMapper
            services.AddAutoMapper(typeof(AutoMapperProfile));
        }
    }
}
