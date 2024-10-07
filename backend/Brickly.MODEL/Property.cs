using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Property
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("admin_id")]
    public string? AdminId { get; set; }

    [BsonElement("name")]
    public string Name { get; set; } = string.Empty;

    [BsonElement("description")]
    public string Description { get; set; } = string.Empty;

    [BsonElement("price")]
    public double Price { get; set; }

    [BsonElement("location")]
    public string Location { get; set; } = string.Empty;

    [BsonElement("square_meters")]
    public double SquareMeters { get; set; }

    [BsonElement("type")]
    public string Type { get; set; } = string.Empty;

    [BsonElement("status")]
    public string Status { get; set; } = string.Empty;

    [BsonElement("photo_url")]
    public string PhotoUrl { get; set; } = string.Empty;

    [BsonElement("financial_metrics")]
    public double FinancialMetrics { get; set; }

    [BsonElement("creation_date")]
    public DateTime CreationDate { get; set; }
}
