using Brickly.MODEL;
using MongoDB.Driver;

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

        public IMongoCollection<T> GetCollection<T>()
        {
            return mongoDatabase.GetCollection<T>(typeof(T).Name.ToLower() + "s"); 
        }

        private void InitializeCollections()
        {
            CreateCollectionIfNotExists("document_types");
            CreateCollectionIfNotExists("admins");
            CreateCollectionIfNotExists("investors");
            CreateCollectionIfNotExists("properties");
            CreateCollectionIfNotExists("investments");
            CreateCollectionIfNotExists("favorites");
            CreateCollectionIfNotExists("notifications");
            CreateCollectionIfNotExists("portfolios");
        }

        private void CreateCollectionIfNotExists(string collectionName)
        {
            var collectionList = mongoDatabase.ListCollectionNames().ToList();

            if (!collectionList.Contains(collectionName))
            {
                mongoDatabase.CreateCollection(collectionName);
            }
        }

        public IMongoCollection<DocumentType> DocumentTypes => mongoDatabase.GetCollection<DocumentType>("document_types");
        public IMongoCollection<Portfolio> Admins => mongoDatabase.GetCollection<Portfolio>("admins");
        public IMongoCollection<Portfolio> Investors => mongoDatabase.GetCollection<Portfolio>("investors");
        public IMongoCollection<Property> Properties => mongoDatabase.GetCollection<Property>("properties");
        public IMongoCollection<Investment> Investments => mongoDatabase.GetCollection<Investment>("investments");
        public IMongoCollection<Favorite> Favorites => mongoDatabase.GetCollection<Favorite>("favorites");
        public IMongoCollection<Notification> Notifications => mongoDatabase.GetCollection<Notification>("notifications");
        public IMongoCollection<Portfolio> Portfolios => mongoDatabase.GetCollection<Portfolio>("portfolios");

    }
}
