using AutoMapper;
using Brickly.DTO.Register;
using Brickly.MODEL;

namespace Brickly.UTILIY
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<DocumentType, DocumentTypeDto>().ReverseMap();
        }
    }
}
