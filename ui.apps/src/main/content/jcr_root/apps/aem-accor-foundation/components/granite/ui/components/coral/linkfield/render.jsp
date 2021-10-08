<%@ include file="/libs/granite/ui/global.jsp" %>
<%@ page
    session="false"
    import="com.adobe.granite.ui.components.Config,
        com.adobe.granite.ui.components.ComponentHelper.Options,com.accor.movenpick.utils.LinkFieldResourceWrapper" %>
<%--
//granite overlay for CTA/linkfields
--%>
<%
    final Config cfg = cmp.getConfig();
    final String name = cfg.get("name", String.class);
    final boolean isRequired = cfg.get("required", false);
    final Resource cfgResource = resourceResolver
            .getResource("/apps/aem-chubb-foundation/components/granite/ui/components/coral/linkfield/fields");

    for (Resource cfgItemResource : cfgResource.getChildren()) {
        cmp.include(new LinkFieldResourceWrapper(cfgItemResource, name, isRequired),
                new Options().rootField(true));
    }
%>