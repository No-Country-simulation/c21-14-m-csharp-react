using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Brickly.MODEL;

public partial class Notification
{
    public ObjectId Id { get; set; }
    public ObjectId InvestorId { get; set; } // Reference to Investor 
    public ObjectId PropertyId { get; set; } // Reference to Property 
    public string? Message { get; set; } // 'mensaje' in Spanish 
    public DateTime NotificationDate { get; set; } = DateTime.UtcNow;
    public bool Status { get; set; }
}
