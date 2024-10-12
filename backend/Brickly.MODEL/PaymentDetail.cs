using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Brickly.Attributes;

namespace Brickly.MODEL;

[CollectionName("payment_details")]

public partial class PaymentDetail
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdPaymentDetail { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdPaymentMethod { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdInvestment { get; set; }  

    [BsonDefaultValue(0)]
    [BsonRepresentation(BsonType.Double)]
    public double AmountPaid { get; set; } = 0;

    [BsonDateTimeOptions(Kind = DateTimeKind.Utc)]
    public DateTime PaymentDate { get; set; } = DateTime.UtcNow;
}

