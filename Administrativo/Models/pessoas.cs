//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Administrativo.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class pessoas
    {
        public int id_prof { get; set; }
        public Nullable<int> idSap { get; set; }
        public string nome { get; set; }
        public string nomeCurto { get; set; }
        public string sexo { get; set; }
        public string cargoPt { get; set; }
        public string cargoEn { get; set; }
        public string cargoEs { get; set; }
        public string email { get; set; }
        public string foneFixo { get; set; }
        public string foneMovel { get; set; }
        public string foto { get; set; }
        public string endereco { get; set; }
        public string cidade { get; set; }
        public string estado { get; set; }
        public string pais { get; set; }
        public string cep { get; set; }
        public string curriculoPt { get; set; }
        public string curriculoEn { get; set; }
        public string curriculoEs { get; set; }
        public string observacoes { get; set; }
        public string contato { get; set; }
        public string emailContato { get; set; }
        public string foneContato { get; set; }
        public int empresas_idEmpresa { get; set; }
    }
}
