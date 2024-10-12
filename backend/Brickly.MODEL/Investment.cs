using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("investments")]
public partial class Investment
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdInvestments { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdProperty { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdInvestor { get; set; }
    public double InvestedAmount { get; set; }

    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime InvestmentDate { get; set; } = DateTime.UtcNow;
    public string? InvestmentStatus { get; set; }
}
