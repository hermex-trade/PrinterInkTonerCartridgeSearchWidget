<?php

namespace PrinterInkTonerCartridgeSearchWidget\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetTypes;

class PrinterInkTonerCartridgeSearchWidget extends BaseWidget
{

    protected $template = "PrinterInkTonerCartridgeSearchWidget::Widgets.PrinterInkTonerCartridgeSearchWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $mainCategoryId = $widgetSettings["mainCategoryId"]["mobile"];

        if (empty($mainCategoryId)) {
            return [
                "data" => false
            ];
        }

        // If the main category id is set
        // then we call the children on each subcategories recursively
        if ($mainCategoryId) {
            return [
                "data" => [
                    "mainCategoryId" => $mainCategoryId,
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
        $settings->createNumber("mainCategoryId")
            ->withName("PrinterInkTonerCartridgeSearchWidget.mainCategoryIdLabel")
            ->withToolTip("PrinterInkTonerCartridgeSearchWidget.mainCategoryIdTooltip");
        $settings->createText("title")
            ->withName("PrinterInkTonerCartridgeSearchWidget.titleLabel")
            ->withToolTip("PrinterInkTonerCartridgeSearchWidget.titleTooltip");
        $settings->createText("description")
            ->withName("PrinterInkTonerCartridgeSearchWidget.descriptionLabel")
            ->withToolTip("PrinterInkTonerCartridgeSearchWidget.descriptionTooltip");
        $settings->createText("redirectUrlHash")
            ->withName("PrinterInkTonerCartridgeSearchWidget.redirectUrlHashLabel")
            ->withToolTip("PrinterInkTonerCartridgeSearchWidget.redirectUrlHashTooltip");
        return $settings->toArray();
    }

}

