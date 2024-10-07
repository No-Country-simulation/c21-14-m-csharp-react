using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Investment
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("property_id")]
    public string? PropertyId { get; set; }

    [BsonElement("investor_id")]
    public string? InvestorId { get; set; }

    [BsonElement("amount_invested")]
    public double AmountInvested { get; set; }

    [BsonElement("investment_date")]
    public DateTime InvestmentDate { get; set; }

    [BsonElement("investment_status")]
    public short InvestmentStatus { get; set; }
}
