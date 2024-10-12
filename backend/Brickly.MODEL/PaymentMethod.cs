using Brickly.Attributes;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Brickly.MODEL;

[CollectionName("payment_methods")]

public partial class PaymentMethod
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdPaymentMethod { get; set; }

    [BsonRepresentation(BsonType.ObjectId)]
    public string? IdInvestor { get; set; }
    public string? Name { get; set; }
    public string? Key { get; set; }
}

