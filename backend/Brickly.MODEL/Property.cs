using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("properties")]
public partial class Property
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdProperty { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdAdmin { get; set; }


    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdCountry { get; set; } 
    public string? Name { get; set; } 
    public string? Description { get; set; }

    [BsonRepresentation(BsonType.Double)]
    public double Price { get; set; } 

    public string? Location { get; set; }

    [BsonRepresentation(BsonType.Double)]
    public double SquareMeters { get; set; }
    
    public string? Type { get; set; } 
    public string? Status { get; set; } 
    public string? PhotoUrl { get; set; }

    [BsonRepresentation(BsonType.Double)]
    public double FinancialMetrics { get; set; }

    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
}
