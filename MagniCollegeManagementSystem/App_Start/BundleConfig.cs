using System.Web.Optimization;

namespace MagniCollegeManagementSystem.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/bootstrap").Include(
                "~/Scripts/jquery-3.6.0.js",
                "~/Scripts/bootstrap.min.js",
                "~/js/common_scripts.js"));
        }
    }
}