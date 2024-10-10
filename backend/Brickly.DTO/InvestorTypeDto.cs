namespace Brickly.DTO {
    public class InvestorTypeDto {
        public string? DocumentTypeId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public DateTime RegistrationDate { get; set; }
        public string DocumentNumber { get; set; } = string.Empty;
    }
}
