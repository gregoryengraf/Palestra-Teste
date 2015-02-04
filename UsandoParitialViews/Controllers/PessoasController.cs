using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UsandoParitialViews.Models;

namespace UsandoParitialViews.Controllers
{
    public class PessoasController : Controller
    {
        private xtreme_palestraEntities db = new xtreme_palestraEntities();

        //
        // GET: /Pessoas/

        public ActionResult Index()
        {
            return View(db.pessoas.ToList());
        }

        //
        // GET: /Pessoas/Details/5

        public ActionResult Details(int id = 0)
        {
            pessoas pessoas = db.pessoas.Find(id);
            if (pessoas == null)
            {
                return HttpNotFound();
            }
            return View(pessoas);
        }

        //
        // GET: /Pessoas/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Pessoas/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(pessoas pessoas)
        {
            if (ModelState.IsValid)
            {
                db.pessoas.Add(pessoas);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(pessoas);
        }

        //
        // GET: /Pessoas/Edit/5

        public ActionResult Edit(int id = 0)
        {
            pessoas pessoas = db.pessoas.Find(id);
            if (pessoas == null)
            {
                return HttpNotFound();
            }
            return View(pessoas);
        }

        //
        // POST: /Pessoas/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(pessoas pessoas)
        {
            if (ModelState.IsValid)
            {
                db.Entry(pessoas).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(pessoas);
        }

        //
        // GET: /Pessoas/Delete/5

        public ActionResult Delete(int id = 0)
        {
            pessoas pessoas = db.pessoas.Find(id);
            if (pessoas == null)
            {
                return HttpNotFound();
            }
            return View(pessoas);
        }

        //
        // POST: /Pessoas/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            pessoas pessoas = db.pessoas.Find(id);
            db.pessoas.Remove(pessoas);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}