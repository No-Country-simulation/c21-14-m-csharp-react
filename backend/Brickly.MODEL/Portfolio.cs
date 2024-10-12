using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("portfolios")]

public partial class Portfolio
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdPortfolio { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? InvestorId { get; set; } 

    public string PortfolioName { get; set; } = "";
    public bool Status { get; set; }

    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime CreationDate { get; set; } = DateTime.UtcNow;
}
