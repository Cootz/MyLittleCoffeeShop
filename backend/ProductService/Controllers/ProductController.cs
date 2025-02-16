using Microsoft.AspNetCore.Mvc;
using ProductService.Implementations;

namespace ProductService.Controllers
{
    [Route("[name]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public ActionResult GetProducts()
        {
            return Ok(ProductProvider.GetProducts());
        }
    }
}
