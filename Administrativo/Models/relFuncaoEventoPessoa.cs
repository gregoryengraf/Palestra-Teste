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
    
    public partial class relFuncaoEventoPessoa
    {
        public int idRelacao { get; set; }
        public int funcoes_idFuncao { get; set; }
        public int pessoas_id_prof { get; set; }
        public int eventos_idEvento { get; set; }
        public Nullable<int> ordemSite { get; set; }
    }
}
