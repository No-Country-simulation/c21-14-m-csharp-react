using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Favorite
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("investor_id")]
    public string? InvestorId { get; set; }

    [BsonElement("property_id")]
    public string? PropertyId { get; set; }

    [BsonElement("date_added")]
    public DateTime DateAdded { get; set; }

    [BsonElement("status")]
    public short Status { get; set; }
}
