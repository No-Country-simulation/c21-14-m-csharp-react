using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("earnings")]
public partial class Earnings
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdEarnings { get; set; }
    
    [BsonRepresentation(BsonType.ObjectId)]
    public string? InvestmentId { get; set; }  
    
    public double GeneratedEarnings { get; set; }
    
    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime ReturnDate { get; set; }

    [BsonDefaultValue(0)]
    [BsonRepresentation(BsonType.Double)]
    public double AvailableBalance { get; set; } = 0;
}

