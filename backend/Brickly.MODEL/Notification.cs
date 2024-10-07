using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Notification
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("investor_id")]
    public string? InvestorId { get; set; }

    [BsonElement("property_id")]
    public string? PropertyId { get; set; }

    [BsonElement("message")]
    public string Message { get; set; } = string.Empty;

    [BsonElement("notification_date")]
    public DateTime NotificationDate { get; set; }

    [BsonElement("status")]
    public short Status { get; set; }
}
