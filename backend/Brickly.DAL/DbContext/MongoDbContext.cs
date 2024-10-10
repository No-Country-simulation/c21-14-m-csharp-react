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
            CreateCollectionIfNotExists("document_types");
            CreateCollectionIfNotExists("admins");
            CreateCollectionIfNotExists("investors");
            CreateCollectionIfNotExists("properties");
            CreateCollectionIfNotExists("investments");
            CreateCollectionIfNotExists("favorites");
            CreateCollectionIfNotExists("notifications");
            CreateCollectionIfNotExists("portfolios");
            CreateCollectionIfNotExists("sponsorship_suggestions");
            CreateCollectionIfNotExists("earnings");
            CreateCollectionIfNotExists("payment_methods");
            CreateCollectionIfNotExists("payment_details");
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
        public IMongoCollection<DocumentType> DocumentTypes => GetCollection<DocumentType>();
        public IMongoCollection<Admin> Admins => GetCollection<Admin>();
        public IMongoCollection<Investor> Investors => GetCollection<Investor>();
        public IMongoCollection<Property> Properties => GetCollection<Property>();
        public IMongoCollection<Investment> Investments => GetCollection<Investment>();
        public IMongoCollection<Favorite> Favorites => GetCollection<Favorite>();
        public IMongoCollection<Notification> Notifications => GetCollection<Notification>();
        public IMongoCollection<Portfolio> Portfolios => GetCollection<Portfolio>();
        public IMongoCollection<SponsorshipSuggestion> SponsorshipSuggestions => GetCollection<SponsorshipSuggestion>();
        public IMongoCollection<Earnings> Earnings => GetCollection<Earnings>();
        public IMongoCollection<PaymentMethod> PaymentMethods => GetCollection<PaymentMethod>();
        public IMongoCollection<PaymentDetail> PaymentDetails => GetCollection<PaymentDetail>();
    }
}
