namespace Brickly.DTO {
    public class PortfolioTypeDto {
        public string? InvestorId { get; set; }

        public string PortfolioName { get; set; } = string.Empty;

        public DateTime CreationDate { get; set; }

        public short Status { get; set; }

        public double TotalValue { get; set; }
    }
}
