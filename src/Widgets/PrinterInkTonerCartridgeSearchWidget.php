<?php

namespace PrinterInkTonerCartridgeSearchWidget\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetTypes;

class PrinterInkTonerCartridgeSearchWidget extends BaseWidget
{

    protected $template = "POCPrinterInkTonerCartridgeSearchWidget::Widgets.PrinterInkTonerCartridgeSearchWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $parentCategoryId = $widgetSettings["parentCategoryId"]["mobile"];

        if (empty($parentCategoryId)) {
            return [
                "data" => false
            ];
        }

        if ($parentCategoryId) {
            return [
                "data" => [
                    "parentCategoryId" => $parentCategoryId,
                ]
            ];
        }

        return [
            "data" => false
        ];
    }

    public function getData(): array
    {
        return WidgetDataFactory::make("POCPrinterInkTonerCartridgeSearch::PrinterInkTonerCartridgeSearchWidget")
            ->withLabel("Widget.printerInkTonerCartridgeSearchWidgetLabel")
            ->withType(WidgetTypes::STATIC)
            ->toArray();
    }

    public function getSettings(): array
    {
        $settings = pluginApp(WidgetSettingsFactory::class);
        $settings->createNumber("parentCategoryId")
            ->withName("Widget.parentCategoryIdLabel")
            ->withToolTip("Widget.parentCategoryIdTooltip");
        $settings->createText("title")
            ->withName("Widget.titleLabel")
            ->withToolTip("Widget.titleTooltip");
        $settings->createText("description")
            ->withName("Widget.descriptionLabel")
            ->withToolTip("Widget.descriptionTooltip");
        $settings->createText("redirectUrlHash")
            ->withName("Widget.redirectUrlHashLabel")
            ->withToolTip("Widget.redirectUrlHashTooltip");
        return $settings->toArray();
    }

}
