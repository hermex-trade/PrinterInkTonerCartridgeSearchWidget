<?php

namespace PrinterInkTonerCartridgeSearchWidget\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetTypes;

class PrinterInkTonerCartridgeSearchWidget extends BaseWidget {

    protected $template = "PrinterInkTonerCartridgeSearchWidget::Widgets.PrinterInkTonerCartridgeSearchWidget";

    const SEARCH_SETTINGS_KEY = "search";
    const MAIN_CATEGORY_ID_KEY = "id";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $search = $widgetSettings["search"]["mobile"];

        if (empty($search))
        {
            return [
                "data" => false
            ];
        }

        if ($search)
        {
            return [
                "data" => [
                    "search" => $search,
                ]
            ];
        }

        return [
            "data" => false
        ];
    }

    public function getData(): array
    {
        return WidgetDataFactory::make("PrinterInkTonerCartridgeSearch::PrinterInkTonerCartridgeSearchWidget")
            ->withLabel("PrinterInkTonerCartridgeSearchWidget.printerInkTonerCartridgeSearchWidgetLabel")
            ->withMaxPerPage(2)
            ->withType(WidgetTypes::STATIC)
            ->toArray();
    }

    public function getSettings(): array
    {
        $settings = pluginApp(WidgetSettingsFactory::class);
        $this->create_category_search_settings($settings);
        return $settings->toArray();
    }

    /**
     * @param $settings
     */
    private function create_category_search_settings($settings)
    {
        $search = $settings->createVerticalContainer("search")
            ->withName("PrinterInkTonerCartridgeSearchWidget.settingsLabel");

        $search->children->createNumber("id")
            ->withName("PrinterInkTonerCartridgeSearchWidget.level1CategoryIdLabel")
            ->withToolTip("PrinterInkTonerCartridgeSearchWidget.level1CategoryIdTooltip");

        $search->children->createNumber("categoryDepth")
            ->withName("PrinterInkTonerCartridgeSearchWidget.searchDepthLabel")
            ->withToolTip("PrinterInkTonerCartridgeSearchWidget.searchDepthTooltip");
    }

}

