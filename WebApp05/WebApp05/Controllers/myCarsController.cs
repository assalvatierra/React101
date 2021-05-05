using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApp05;
using WebApp05.Data;

namespace WebApp05.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class myCarsController : ControllerBase
    {
        private readonly WebApp05Context _context;

        public myCarsController(WebApp05Context context)
        {
            _context = context;
        }

        // GET: api/myCars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<myCar>>> GetmyCar()
        {
            return await _context.myCar.ToListAsync();
        }

        // GET: api/myCars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<myCar>> GetmyCar(int id)
        {
            var myCar = await _context.myCar.FindAsync(id);

            if (myCar == null)
            {
                return NotFound();
            }

            return myCar;
        }

        // PUT: api/myCars/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutmyCar(int id, myCar myCar)
        {
            if (id != myCar.id)
            {
                return BadRequest();
            }

            _context.Entry(myCar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!myCarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/myCars
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<myCar>> PostmyCar(myCar myCar)
        {
            _context.myCar.Add(myCar);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetmyCar", new { id = myCar.id }, myCar);
        }

        // DELETE: api/myCars/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletemyCar(int id)
        {
            var myCar = await _context.myCar.FindAsync(id);
            if (myCar == null)
            {
                return NotFound();
            }

            _context.myCar.Remove(myCar);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool myCarExists(int id)
        {
            return _context.myCar.Any(e => e.id == id);
        }
    }
}
