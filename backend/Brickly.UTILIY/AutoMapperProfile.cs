using AutoMapper;
using Brickly.DTO.Obtain;
using Brickly.DTO.Register;
using Brickly.DTO.Update;
using Brickly.MODEL;

namespace Brickly.UTILIY
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            // Mapeo para DocumentType
            CreateMap<DocumentType, DocumentTypeDto>().ReverseMap();

            // Mapeo para crear administrador
            CreateMap<CreateAdminDto, Admin>().ReverseMap();

            // Mapeo para actualizar administrador
            CreateMap<UpdateAdminDto, Admin>().ReverseMap();

            // Mapeo para obtener datos de administrador
            CreateMap<Admin, AdminDto>().ReverseMap();

            // Mapeo para obtneer los datos del login
            CreateMap<LoginDto, AdminDto>().ReverseMap();
        }
    }
}
