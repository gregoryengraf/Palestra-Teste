using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Admin.Models;

namespace Admin.Controllers
{
    public class EventosController : Controller
    {
        private xtreme_palestraEntities db = new xtreme_palestraEntities();

        //
        // GET: /Eventos/

        public ActionResult Index()
        {
            return View(db.eventos.ToList());
        }

        //
        // GET: /Eventos/Details/5

        public ActionResult Details(int id = 0)
        {
            eventos eventos = db.eventos.Find(id);
            if (eventos == null)
            {
                return HttpNotFound();
            }
            return View(eventos);
        }

        //
        // GET: /Eventos/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Eventos/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(eventos eventos)
        {
            if (ModelState.IsValid)
            {
                db.eventos.Add(eventos);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(eventos);
        }

        //
        // GET: /Eventos/Edit/5

        public ActionResult Edit(int id = 0)
        {
            eventos eventos = db.eventos.Find(id);
            if (eventos == null)
            {
                return HttpNotFound();
            }
            return View(eventos);
        }

        //
        // POST: /Eventos/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(eventos eventos)
        {
            if (ModelState.IsValid)
            {
                db.Entry(eventos).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(eventos);
        }

        //
        // GET: /Eventos/Delete/5

        public ActionResult Delete(int id = 0)
        {
            eventos eventos = db.eventos.Find(id);
            if (eventos == null)
            {
                return HttpNotFound();
            }
            return View(eventos);
        }

        //
        // POST: /Eventos/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            eventos eventos = db.eventos.Find(id);
            db.eventos.Remove(eventos);
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