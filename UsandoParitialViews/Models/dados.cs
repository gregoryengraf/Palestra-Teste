//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace UsandoParitialViews.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class dados
    {
        public int idDado { get; set; }
        public string localReuniaoPrevia { get; set; }
        public string dataHoraReuniaoPrevia { get; set; }
        public string observacoesReuniao { get; set; }
        public Nullable<int> numeroPessoas { get; set; }
        public string horaIncio { get; set; }
        public string horaFim { get; set; }
        public string observacoesFinais { get; set; }
        public int eventos_idEvento { get; set; }
    }
}
