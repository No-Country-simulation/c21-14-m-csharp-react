using MongoDB.Bson;

namespace Brickly.MODEL
{
    public partial class PaymentMethod
    {
        public ObjectId Id { get; set; }
        public ObjectId InvestorId { get; set; }
        public string? Name { get; set; }
        public string? Key { get; set; }
    }
}
