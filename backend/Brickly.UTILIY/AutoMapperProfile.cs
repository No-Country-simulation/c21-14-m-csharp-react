using AutoMapper;
using Brickly.DTO;
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
