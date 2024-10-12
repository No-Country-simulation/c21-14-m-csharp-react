using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("notifications")]
public partial class Notification
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)] 
    public string? IdNotification { get; set; }

    [BsonRepresentation(BsonType.ObjectId)] 
    public string? IdInvestor { get; set; }

    [BsonRepresentation(BsonType.ObjectId)] 
    public string? IdProperty { get; set; }

    public string? Message { get; set; }

    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)] // Asegura que se guarde como UTC.
    public DateTime NotificationDate { get; set; } = DateTime.UtcNow;

    public bool Status { get; set; }
}