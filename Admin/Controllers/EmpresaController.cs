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
    public class EmpresaController : Controller
    {
        private xtreme_palestraEntities db = new xtreme_palestraEntities();

        //
        // GET: /Empresa/

        public ActionResult Index()
        {
            return View(db.empresas.ToList());
        }

        //
        // GET: /Empresa/Details/5

        public ActionResult Details(int id = 0)
        {
            empresas empresas = db.empresas.Find(id);
            if (empresas == null)
            {
                return HttpNotFound();
            }
            return View(empresas);
        }

        //
        // GET: /Empresa/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Empresa/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(empresas empresas)
        {
            if (ModelState.IsValid)
            {
                db.empresas.Add(empresas);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(empresas);
        }

        //
        // GET: /Empresa/Edit/5

        public ActionResult Edit(int id = 0)
        {
            empresas empresas = db.empresas.Find(id);
            if (empresas == null)
            {
                return HttpNotFound();
            }
            return View(empresas);
        }

        //
        // POST: /Empresa/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(empresas empresas)
        {
            if (ModelState.IsValid)
            {
                db.Entry(empresas).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(empresas);
        }

        //
        // GET: /Empresa/Delete/5

        public ActionResult Delete(int id = 0)
        {
            empresas empresas = db.empresas.Find(id);
            if (empresas == null)
            {
                return HttpNotFound();
            }
            return View(empresas);
        }

        //
        // POST: /Empresa/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            empresas empresas = db.empresas.Find(id);
            db.empresas.Remove(empresas);
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