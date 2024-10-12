using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL
{
    public partial class SponsorshipSuggestion
    {
        public ObjectId Id { get; set; }
        public ObjectId InvestorId { get; set; } // Reference to Investor 
        public ObjectId AdminId { get; set; } // Reference to Admin 
        public string? Message { get; set; }
        [BsonDefaultValue(1)]
        [BsonRepresentation(BsonType.Int32)]
        public bool Status { get; set; }
    }
}
