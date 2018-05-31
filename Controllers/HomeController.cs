using System;
using Microsoft.AspNetCore.Mvc;
namespace alchemylab.Controllers
{
   public class HomeController : Controller
   {
      public IActionResult Index()
      {
         return View();
      }
   }
}