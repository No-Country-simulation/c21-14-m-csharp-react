using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Portfolio
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("investor_id")]
    public string? InvestorId { get; set; }

    [BsonElement("portfolio_name")]
    public string PortfolioName { get; set; } = string.Empty;

    [BsonElement("creation_date")]
    public DateTime CreationDate { get; set; }

    [BsonElement("status")]
    public short Status { get; set; }

    [BsonElement("total_value")]
    public double TotalValue { get; set; }
}
