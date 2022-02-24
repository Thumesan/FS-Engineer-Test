using FS_Engineer_Test.Models;
using FS_Engineer_Test.Repo.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FS_Engineer_Test.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SwapiController : ControllerBase
    {
        private readonly ISwapiRepo _swapiRepo;

        public SwapiController(ISwapiRepo swapiRepo)
        {
            _swapiRepo = swapiRepo;
        }

        [HttpGet("people")]
        public async Task<ActionResult<SwapiPeople>> GetSwapiPeople()
        {
            SwapiPeople swapiPeople = await _swapiRepo.GetSwapiPeople();
            if (swapiPeople == null)
            {
                return NoContent();
            }
            return Ok(swapiPeople);
        }

    }
}
