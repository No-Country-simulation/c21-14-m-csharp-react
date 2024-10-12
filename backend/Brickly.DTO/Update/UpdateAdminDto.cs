using Brickly.DTO.Register;
using Brickly.DTO.Validations;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Brickly.DTO.Update
{
    public class UpdateAdminDto
    {
        public List<DocumentTypeDto>? DocumentType { get; set; }

        [Required(ErrorMessage = "Por favor, ingresa tu número de documento.")]
        [CustomValidations.OnlyNumbers(ErrorMessage = "El número de documento solo debe contener dígitos.")]
        public string? DocumentNumber { get; set; } // Número de documento

        [Required(ErrorMessage = "Por favor, ingresa tu primer nombre.")]
        [StringLength(50, ErrorMessage = "El primer nombre no puede tener más de 50 caracteres.")]
        [CustomValidations.OnlyLetters(ErrorMessage = "El primer nombre solo debe contener letras.")]
        public string? FirstName { get; set; } // Primer nombre

        [Required(ErrorMessage = "Por favor, ingresa tu apellido.")]
        [StringLength(50, ErrorMessage = "El apellido no puede tener más de 50 caracteres.")]
        [CustomValidations.OnlyLetters(ErrorMessage = "El apellido solo debe contener letras.")]
        public string? LastName { get; set; } // Apellido

        [Required(ErrorMessage = "Por favor, ingresa tu correo electrónico.")]
        [CustomValidations.EmailDomain(ErrorMessage = "Por favor, ingresa un correo electrónico válido (gmail.com, hotmail.com, outlook.com).")]
        public string? Email { get; set; } // Correo electrónico

        [Phone(ErrorMessage = "Por favor, ingresa un número de teléfono válido.")]
        [CustomValidations.OnlyNumbers(ErrorMessage = "El número de teléfono solo debe contener dígitos.")]
        public string? Phone { get; set; } // Número de teléfono

        [Required(ErrorMessage = "Por favor, ingresa una contraseña.")]
        [StringLength(100, ErrorMessage = "La contraseña debe tener al menos {2} caracteres y un máximo de {1} caracteres.", MinimumLength = 6)]
        [CustomValidations.MustStartWithUppercase(ErrorMessage = "La contraseña debe comenzar con una letra mayúscula.")]
        public string? Password { get; set; } // Contraseña

        [JsonIgnore]
        public string? DocumentTypeId { get; set; } // ID del tipo de documento
    }
}
