using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL
{
    public partial class PaymentDetail
    {
        public ObjectId Id { get; set; }
        public ObjectId PaymentMethodId { get; set; } // Reference to PaymentMethod 
        public ObjectId InvestmentId { get; set; } // Reference to Investment 

        [BsonDefaultValue(0)]
        [BsonRepresentation(BsonType.Double)]
        public double AmountPaid { get; set; } = 0;

        [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
        public DateTime PaymentDate { get; set; } = DateTime.UtcNow;
    }
}
