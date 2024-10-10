using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL
{
    public partial class Earnings
    {
        public ObjectId Id { get; set; }
        public ObjectId InvestmentId { get; set; } // Reference to Investment 
        public double GeneratedEarnings { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
        public DateTime ReturnDate { get; set; }
        [BsonDefaultValue(0)]
        [BsonRepresentation(BsonType.Double)]
        public double AvailableBalance { get; set; } = 0;
    }
}
