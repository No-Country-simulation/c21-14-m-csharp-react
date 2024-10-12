using Brickly.Attributes; // Asegúrate de incluir esta línea
using Brickly.MODEL;
using MongoDB.Driver;
using System;
using System.Linq;

namespace Brickly.DAL.DbContext
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase mongoDatabase;

        public MongoDbContext(IMongoClient mongoClient, string databaseName)
        {
            mongoDatabase = mongoClient.GetDatabase(databaseName);
            InitializeCollections();
        }

        // Método para obtener la colección usando el atributo CollectionName
        public IMongoCollection<T> GetCollection<T>()
        {
            var collectionName = GetCollectionName(typeof(T));
            return mongoDatabase.GetCollection<T>(collectionName);
        }

        // Método que obtiene el nombre de la colección a partir del atributo
        private string GetCollectionName(Type type)
        {
            var collectionAttribute = type.GetCustomAttributes(typeof(CollectionNameAttribute), false)
                                           .FirstOrDefault() as CollectionNameAttribute;

            // Si no hay atributo, devuelve el nombre por defecto (en minúsculas)
            return collectionAttribute != null ? collectionAttribute.Name : type.Name.ToLower();
        }

        private void InitializeCollections()
        {
            // Puedes seguir usando el método de crear colecciones aquí si lo necesitas
            CreateCollectionIfNotExists("admins");
            CreateCollectionIfNotExists("country");
            CreateCollectionIfNotExists("document_types");
            CreateCollectionIfNotExists("earnings");
            CreateCollectionIfNotExists("favorites");
            CreateCollectionIfNotExists("investments");
            CreateCollectionIfNotExists("investors");
            CreateCollectionIfNotExists("notifications");
            CreateCollectionIfNotExists("payment_details");
            CreateCollectionIfNotExists("payment_methods");
            CreateCollectionIfNotExists("portfolios");
            CreateCollectionIfNotExists("properties");
            CreateCollectionIfNotExists("sponsorship_suggestions");
        }

        private void CreateCollectionIfNotExists(string collectionName)
        {
            var collectionList = mongoDatabase.ListCollectionNames().ToList();

            if (!collectionList.Contains(collectionName))
            {
                mongoDatabase.CreateCollection(collectionName);
            }
        }

        /// <summary>
        /// Propiedades de colección para cada modelo.
        /// </summary>
        public IMongoCollection<Admin> Admins => GetCollection<Admin>();
        public IMongoCollection<Country> Country  => GetCollection<Country>();
        public IMongoCollection<DocumentType> DocumentTypes => GetCollection<DocumentType>();
        public IMongoCollection<Earnings> Earnings => GetCollection<Earnings>();
        public IMongoCollection<Favorite> Favorites => GetCollection<Favorite>();
        public IMongoCollection<Investment> Investments => GetCollection<Investment>();
        public IMongoCollection<Investor> Investors => GetCollection<Investor>();
        public IMongoCollection<Notification> Notifications => GetCollection<Notification>();
        public IMongoCollection<PaymentDetail> PaymentDetails => GetCollection<PaymentDetail>();
        public IMongoCollection<PaymentMethod> PaymentMethods => GetCollection<PaymentMethod>();
        public IMongoCollection<Portfolio> Portfolios => GetCollection<Portfolio>();
        public IMongoCollection<Property> Properties => GetCollection<Property>();
        public IMongoCollection<SponsorshipSuggestion> SponsorshipSuggestions => GetCollection<SponsorshipSuggestion>();
    }
}
