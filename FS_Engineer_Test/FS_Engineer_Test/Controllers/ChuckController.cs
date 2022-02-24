using FS_Engineer_Test.Models;
using FS_Engineer_Test.Repo.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FS_Engineer_Test.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ChuckController : ControllerBase
    {
        private readonly IChuckRepo _chuckRepo;

        public ChuckController(IChuckRepo chuckRepo)
        {
            _chuckRepo = chuckRepo;
        }

        [HttpGet("categories")]
        public async Task<ActionResult<ChuckCategories>> GetAllChuckCategories()
        {
            ChuckCategories categories = await _chuckRepo.GetChuckCategories();
            if (categories == null)
            {
                return NoContent();
            }
            return Ok(categories);
        }

    }
}
