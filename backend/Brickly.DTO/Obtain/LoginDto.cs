using Brickly.DTO.Register;
using Brickly.DTO.Validations;
using System.ComponentModel.DataAnnotations;

namespace Brickly.DTO.Obtain
{
    public class LoginDto
    {
        public List<DocumentTypeDto>? DocumentTypes { get; set; } // Lista de tipos de documentos

        [Required(ErrorMessage = "Por favor, ingresa tu número de documento.")]
        [CustomValidations.OnlyNumbers(ErrorMessage = "El número de documento solo debe contener dígitos.")]
        public string? DocumentNumber { get; set; }

        [Required(ErrorMessage = "Por favor, ingresa una contraseña.")]
        [StringLength(100, ErrorMessage = "La contraseña debe tener al menos {2} caracteres y un máximo de {1} caracteres.", MinimumLength = 6)]
        [CustomValidations.MustStartWithUppercase(ErrorMessage = "La contraseña debe comenzar con una letra mayúscula.")]
        public string? Password { get; set; }
    }
}
