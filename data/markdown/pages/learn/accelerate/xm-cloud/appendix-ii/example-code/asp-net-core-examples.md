---
title: 'Examples for ASP.NET Core SDK '
description: 'Examples for ASP.NET Core SDK '
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
lastUpdated: '2025-03-31'
created: '2025-03-31'
---

## Example 1: Model-Bound View

Model class: Promo.cs

```typescript
using Sitecore.AspNetCore.SDK.LayoutService.Client.Response.Model.Fields;
using Sitecore.AspNetCore.SDK.RenderingEngine.Binding.Attributes;

namespace Sitecore.AspNetCore.Starter.Models;

public class Promo : BaseModel
{
    public const string VARIANT_WITH_TEXT = "WithText";

    [SitecoreComponentField]
    public ImageField? PromoIcon { get; set; }

    [SitecoreComponentField]
    public TextField? PromoText { get; set; }

    [SitecoreComponentField]
    public HyperLinkField? PromoLink { get; set; }

```

View file: Promo.cshtml

```typescript
@model Sitecore.AspNetCore.Starter.Models.Promo

<div class="component promo @Model.Styles @Model.GridParameters" id="@Model.Id">
    <div class="component-content">
        <div class="field-promoicon">
            <sc-img asp-for="@Model.PromoIcon" />
        </div>
        <div class="promo-text">
            @{
                string variantClass = Model.FieldNames == Promo.VARIANT_WITH_TEXT ? "promo-text" : string.Empty;
            }
            <div>
                <div class="field-promotext">
                    <sc-text class="@variantClass" asp-for="@Model.PromoText"></sc-text>
                </div>
            </div>
            <div class="field-promolink">
                <sc-link class="@variantClass" asp-for="@Model.PromoLink"></sc-link>
            </div>
        </div>
    </div>
</div>
```
Registering a component (an additional line in the ServiceCollectionExtensions class):
```typescript
using Sitecore.AspNetCore.SDK.RenderingEngine.Configuration;
using Sitecore.AspNetCore.Starter.Models.LinkList;
using Sitecore.AspNetCore.Starter.Models.Navigation;
using Sitecore.AspNetCore.Starter.Models.Title;

namespace Sitecore.AspNetCore.Starter.Extensions;

public static class ServiceCollectionExtensions
{
    public static RenderingEngineOptions AddStarterKitViews(this RenderingEngineOptions renderingEngineOptions)
    {
        renderingEngineOptions.AddModelBoundView<Title>("Title")
                              .AddModelBoundView<Container>("Container")
                              .AddModelBoundView<ColumnSplitter>("ColumnSplitter")
                              .AddModelBoundView<RowSplitter>("RowSplitter")
                              .AddModelBoundView<PageContent>("PageContent")
                              .AddModelBoundView<RichText>("RichText")
                              .AddModelBoundView<Promo>("Promo") // Add this line to register view
                              .AddModelBoundView<LinkList>("LinkList")
                              .AddModelBoundView<Image>("Image")
                              .AddModelBoundView<PartialDesignDynamicPlaceholder>("PartialDesignDynamicPlaceholder")
                              .AddModelBoundView<Navigation>("Navigation");

        return renderingEngineOptions;
    }
}
```

## Example 2: View Component
The following view component additionally to the Image field received from layout response gets the data from third-party weather service and combine everything in the same model class.

Model classes:
```typescript
using Sitecore.AspNetCore.SDK.LayoutService.Client.Response.Model.Fields;
using Sitecore.AspNetCore.SDK.RenderingEngine.Binding.Attributes;

namespace Sitecore.AspNetCore.Starter.Models.WeatherModels
{
  public class WeatherModel: BaseModel
  {
    [SitecoreComponentField(Name = "Image")]
    public ImageField? ImageField { get; set; }

    public CurrentWeatherData? WeatherData { get; set; }
  }
}


using System.Text.Json.Serialization;

public class CurrentWeatherData
{
  [JsonPropertyName("coord")]
  public Coordinates Coord { get; set; }

  [JsonPropertyName("weather")]
  public List<WeatherInfo> Weather { get; set; }

  [JsonPropertyName("base")]
  public string Base { get; set; }

  [JsonPropertyName("main")]
  public MainWeatherInfo Main { get; set; }

  [JsonPropertyName("visibility")]
  public int Visibility { get; set; }

  [JsonPropertyName("wind")]
  public WindInfo Wind { get; set; }

  [JsonPropertyName("clouds")]
  public CloudsInfo Clouds { get; set; }

  [JsonPropertyName("dt")]
  public long Timestamp { get; set; }

  [JsonPropertyName("sys")]
  public SystemInfo Sys { get; set; }

  [JsonPropertyName("timezone")]
  public int Timezone { get; set; }

  [JsonPropertyName("id")]
  public int Id { get; set; }

  [JsonPropertyName("name")]
  public string Name { get; set; }

  [JsonPropertyName("cod")]
  public int Cod { get; set; }
}

public class Coordinates
{
  [JsonPropertyName("lon")]
  public double Longitude { get; set; }

  [JsonPropertyName("lat")]
  public double Latitude { get; set; }
}

public class MainWeatherInfo
{
  [JsonPropertyName("temp")]
  public double Temperature { get; set; }

  [JsonPropertyName("feels_like")]
  public double FeelsLike { get; set; }

  [JsonPropertyName("temp_min")]
  public double TempMin { get; set; }

  [JsonPropertyName("temp_max")]
  public double TempMax { get; set; }

  [JsonPropertyName("pressure")]
  public int Pressure { get; set; }

  [JsonPropertyName("humidity")]
  public int Humidity { get; set; }

  [JsonPropertyName("sea_level")]
  public int? SeaLevel { get; set; }

  [JsonPropertyName("grnd_level")]
  public int? GroundLevel { get; set; }
}

public class WindInfo
{
  [JsonPropertyName("speed")]
  public double Speed { get; set; }

  [JsonPropertyName("deg")]
  public int Direction { get; set; }

  [JsonPropertyName("gust")]
  public double? Gust { get; set; }
}

public class CloudsInfo
{
  [JsonPropertyName("all")]
  public int All { get; set; }
}

public class SystemInfo
{
  [JsonPropertyName("country")]
  public string Country { get; set; }

  [JsonPropertyName("sunrise")]
  public long Sunrise { get; set; }

  [JsonPropertyName("sunset")]
  public long Sunset { get; set; }
}

public class WeatherInfo
{
  [JsonPropertyName("id")]
  public int Id { get; set; }

  [JsonPropertyName("main")]
  public string Main { get; set; }

  [JsonPropertyName("description")]
  public string Description { get; set; }

  [JsonPropertyName("icon")]
  public string Icon { get; set; }
}
```
View Component class:
```typescript
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewComponents;
using Sitecore.AspNetCore.SDK.RenderingEngine.Binding;
using Sitecore.AspNetCore.Starter.Models.WeatherModels;
using System.Text.Json;

namespace Sitecore.AspNetCore.Starter.ViewComponents
{
  [ViewComponent(Name = ViewComponentName)]
  public class WeatherViewComponent(IViewModelBinder modelBinder): ViewComponent
  {

    public const string ViewComponentName = "Weather";

    private readonly IViewModelBinder _modelBinder = modelBinder;

    public async Task<IViewComponentResult> InvokeAsync()
    {
      IViewComponentResult result = new ContentViewComponentResult(string.Empty);
      WeatherModel model = await _modelBinder.Bind<WeatherModel>(ViewContext);

      using HttpClient client = new HttpClient();

      string url = "https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=APP_ID_HERE";

      try
      {
        HttpResponseMessage response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode();

        string jsonString = await response.Content.ReadAsStringAsync();
        model.WeatherData = JsonSerializer.Deserialize<CurrentWeatherData>(jsonString);

        result = View("/Views/Shared/Components/Weather/Weather.cshtml", model);
      }
      catch (Exception e)
      {
        Console.WriteLine(e.Message);
      }

      return result;
    }
  }
}
```

View:
```typescript
@model Sitecore.AspNetCore.Starter.Models.WeatherModels.WeatherModel

<div class="component weather @Model.Styles @Model.GridParameters" id="@Model.Id">
  <sc-img asp-for="@Model.ImageField" class="weather-image" />

  <div class="weather-info">
    <h2>@Model?.WeatherData?.Weather[0].Main - @Model?.WeatherData?.Weather[0].Description</h2>
    <div class="weather-details">
      <div class="weather-temp">
        Temp: <span class="current-temp">@Model?.WeatherData?.Main?.Temperature</span><br/>
        Feels like: <span class="feels-like">@Model?.WeatherData?.Main?.FeelsLike</span><br />
        Humidity: <span class="humidity">@Model?.WeatherData?.Main.Humidity</span><br />
      </div>
      @* An example of adding a partial view *@
      @await Html.PartialAsync("~/Views/Shared/Components/Weather/WeatherText.cshtml", Model)
    </div>
  </div>
</div>
```

Registering a component (an additional line in the ServiceCollectionExtensions class):

```typescript
using Sitecore.AspNetCore.SDK.RenderingEngine.Configuration;
using Sitecore.AspNetCore.Starter.Models.LinkList;
using Sitecore.AspNetCore.Starter.Models.Navigation;
using Sitecore.AspNetCore.Starter.Models.Title;
using Sitecore.AspNetCore.Starter.ViewComponents;

namespace Sitecore.AspNetCore.Starter.Extensions;

public static class ServiceCollectionExtensions
{
    public static RenderingEngineOptions AddStarterKitViews(this RenderingEngineOptions renderingEngineOptions)
    {
    renderingEngineOptions.AddModelBoundView<Title>("Title")
                          .AddModelBoundView<Container>("Container")
                          .AddModelBoundView<ColumnSplitter>("ColumnSplitter")
                          .AddModelBoundView<RowSplitter>("RowSplitter")
                          .AddModelBoundView<PageContent>("PageContent")
                          .AddModelBoundView<RichText>("RichText")
                          .AddModelBoundView<Promo>("Promo")
                          .AddModelBoundView<LinkList>("LinkList")
                          .AddModelBoundView<Image>("Image")
                          .AddModelBoundView<PartialDesignDynamicPlaceholder>("PartialDesignDynamicPlaceholder")
                          .AddModelBoundView<Navigation>("Navigation")
                          .AddViewComponent(WeatherViewComponent.ViewComponentName);

        return renderingEngineOptions;
    }
}
```

## Example 3: Partial view
To access the data that Experience Edge returns in a Razor view, you can add the following code to your Razor view:

```typescript

@using MyRenderingHost.ViewModels;
@using Sitecore.AspNetCore.SDK.LayoutService.Client.Response.Model.Fields;

@{
  var route = this.SitecoreRoute();
  var context = this.SitecoreContext();
  var component = this.SitecoreComponent().ReadFields<ContentBlock>();
  var pageTitleField = route.ReadField<TextField>("pageTitle");
}

<section>
  <h1 asp-for="@pageTitleField"></h1>
  <h2>Site name: @context.Site.Name</h1>
  <h2>Route name: @route.Name</h1>
  <h2 asp-for="@component.Heading"></h2>
  <div>
    <sc-text asp-for="@component.Content"></sc-text>
  </div>
</section>
Registering of the partial view:
```

```typescript

public void ConfigureServices(IServiceCollection services)
{
  var renderingEngineBuilder = services.AddSitecoreRenderingEngine(options =>
    options

      // Map Partials
      .AddPartialView("HeaderBlock", "_HeaderBlock")
      .AddPartialView(name => name.StartsWith("sc"), "_OtherBlock")

      // Add fallback for any other component
      .AddDefaultPartialView("_ComponentNotFound");
  );
}
```


