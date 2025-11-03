import postgresqlLogo from '@/assets/logos/postgresql.svg';
import mysqlLogo from '@/assets/logos/mysql.svg';
import mongodbLogo from '@/assets/logos/mongodb.svg';
import redisLogo from '@/assets/logos/redis.svg';
import n8nLogo from '@/assets/logos/n8n-icon.png';
import kafkaLogo from '@/assets/logos/kafka.svg';
import elasticsearchLogo from '@/assets/logos/elasticsearch.svg';
import vaultLogo from '@/assets/logos/vault.svg';
import prometheusLogo from '@/assets/logos/prometheus.svg';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ServiceCategory;
  logo: string;
  price: string;
  specs: {
    ram: string;
    storage: string;
    cpu: string;
    bandwidth: string;
  };
  features: string[];
  technicalDetails: string[];
  useCases: string[];
}

export type ServiceCategory = "database" | "automation" | "security" | "monitoring" | "messaging" | "search" | "cache";

export const categories: Record<ServiceCategory, string> = {
  database: "دیتابیس",
  automation: "اتوماسیون",
  security: "امنیت",
  monitoring: "مانیتورینگ",
  messaging: "پیام‌رسانی",
  search: "جستجو",
  cache: "کش"
};

export const services: Service[] = [
  {
    id: "postgresql",
    title: "PostgreSQL",
    description: "دیتابیس رابطه‌ای قدرتمند و open-source",
    longDescription: "PostgreSQL یکی از پیشرفته‌ترین دیتابیس‌های رابطه‌ای است که برای پروژه‌های حرفه‌ای و مقیاس‌پذیر طراحی شده است. با پشتیبانی از ACID، JSON، و قابلیت‌های پیشرفته.",
    category: "database",
    logo: postgresqlLogo,
    price: "150,000",
    specs: {
      ram: "4 GB",
      storage: "100 GB SSD",
      cpu: "2 vCore",
      bandwidth: "2 TB"
    },
    features: [
      "بکاپ خودکار روزانه",
      "پشتیبانی از ACID",
      "Replication و High Availability",
      "نظارت و مانیتورینگ 24/7",
      "پشتیبانی از JSON و JSONB",
      "امنیت سطح Enterprise"
    ],
    technicalDetails: [
      "PostgreSQL 15 (آخرین نسخه پایدار)",
      "Automated backups with point-in-time recovery",
      "SSL/TLS encryption",
      "Connection pooling with PgBouncer",
      "Weekly maintenance window",
      "Read replicas available"
    ],
    useCases: [
      "اپلیکیشن‌های وب و موبایل",
      "سیستم‌های مدیریت محتوا",
      "پلتفرم‌های تجارت الکترونیک",
      "سیستم‌های مالی و بانکی"
    ]
  },
  {
    id: "mysql",
    title: "MySQL",
    description: "محبوب‌ترین دیتابیس رابطه‌ای دنیا",
    longDescription: "MySQL یک دیتابیس رابطه‌ای سریع و قابل اعتماد است که در میلیون‌ها وب‌سایت در سراسر جهان استفاده می‌شود. با کارایی بالا و مدیریت آسان.",
    category: "database",
    logo: mysqlLogo,
    price: "130,000",
    specs: {
      ram: "4 GB",
      storage: "80 GB SSD",
      cpu: "2 vCore",
      bandwidth: "2 TB"
    },
    features: [
      "بکاپ خودکار و restore آسان",
      "کارایی بالا برای Read-heavy workloads",
      "پشتیبانی از InnoDB و MyISAM",
      "Replication و Clustering",
      "مانیتورینگ real-time",
      "پشتیبانی 24/7"
    ],
    technicalDetails: [
      "MySQL 8.0 Community Edition",
      "InnoDB storage engine",
      "Binary log replication",
      "Automated security patches",
      "Query cache optimization",
      "SSL connections"
    ],
    useCases: [
      "WordPress و CMS ها",
      "فروشگاه‌های آنلاین",
      "سیستم‌های CRM",
      "اپلیکیشن‌های SaaS"
    ]
  },
  {
    id: "mongodb",
    title: "MongoDB",
    description: "دیتابیس NoSQL قدرتمند و مقیاس‌پذیر",
    longDescription: "MongoDB یک دیتابیس NoSQL document-oriented است که برای ذخیره‌سازی داده‌های غیرساختاریافته و مقیاس‌پذیری افقی طراحی شده است.",
    category: "database",
    logo: mongodbLogo,
    price: "170,000",
    specs: {
      ram: "8 GB",
      storage: "150 GB SSD",
      cpu: "4 vCore",
      bandwidth: "3 TB"
    },
    features: [
      "Flexible Schema Design",
      "Horizontal Scaling با Sharding",
      "Replica Sets برای High Availability",
      "Aggregation Framework قدرتمند",
      "بکاپ خودکار و Continuous",
      "Atlas-compatible APIs"
    ],
    technicalDetails: [
      "MongoDB 7.0",
      "WiredTiger storage engine",
      "Automatic failover",
      "ACID transactions",
      "Built-in replication",
      "TLS/SSL encryption"
    ],
    useCases: [
      "اپلیکیشن‌های Real-time",
      "IoT و Sensor Data",
      "Content Management",
      "Mobile Applications"
    ]
  },
  {
    id: "redis",
    title: "Redis",
    description: "سریع‌ترین دیتابیس in-memory برای Cache و Session",
    longDescription: "Redis یک دیتابیس in-memory با کارایی فوق‌العاده است که برای caching، session management، و real-time analytics استفاده می‌شود.",
    category: "cache",
    logo: redisLogo,
    price: "120,000",
    specs: {
      ram: "8 GB",
      storage: "50 GB SSD",
      cpu: "2 vCore",
      bandwidth: "2 TB"
    },
    features: [
      "Sub-millisecond latency",
      "Persistence به disk",
      "Pub/Sub messaging",
      "Lua scripting support",
      "Automatic failover",
      "Cluster mode برای scalability"
    ],
    technicalDetails: [
      "Redis 7.2",
      "RDB and AOF persistence",
      "Redis Sentinel for HA",
      "Redis Cluster support",
      "Memory optimization",
      "SSL/TLS support"
    ],
    useCases: [
      "Session Storage",
      "Application Caching",
      "Real-time Analytics",
      "Message Queues"
    ]
  },
  {
    id: "n8n",
    title: "n8n",
    description: "پلتفرم اتوماسیون workflow با رابط گرافیکی",
    longDescription: "n8n یک ابزار اتوماسیون open-source است که به شما امکان می‌دهد workflows پیچیده را بدون نیاز به کدنویسی ایجاد کنید. با بیش از 200 integration.",
    category: "automation",
    logo: n8nLogo,
    price: "100,000",
    specs: {
      ram: "2 GB",
      storage: "30 GB SSD",
      cpu: "1 vCore",
      bandwidth: "1 TB"
    },
    features: [
      "بیش از 200 integration آماده",
      "Visual workflow builder",
      "Webhook support",
      "Scheduling و Cron jobs",
      "Error handling پیشرفته",
      "Self-hosted و کاملا تحت کنترل شما"
    ],
    technicalDetails: [
      "n8n Latest version",
      "PostgreSQL backend",
      "Queue mode support",
      "Webhook endpoints",
      "Custom node support",
      "SSL/TLS enabled"
    ],
    useCases: [
      "اتوماسیون Marketing",
      "Data Synchronization",
      "Notification Systems",
      "API Integration"
    ]
  },
  {
    id: "kafka",
    title: "Apache Kafka",
    description: "پلتفرم streaming توزیع‌شده برای Big Data",
    longDescription: "Apache Kafka یک پلتفرم event streaming توزیع‌شده است که برای پردازش میلیون‌ها رویداد در ثانیه طراحی شده است. ایده‌آل برای معماری microservices.",
    category: "messaging",
    logo: kafkaLogo,
    price: "250,000",
    specs: {
      ram: "16 GB",
      storage: "500 GB SSD",
      cpu: "8 vCore",
      bandwidth: "5 TB"
    },
    features: [
      "توان پردازش بالا (millions/sec)",
      "Fault-tolerant و Distributed",
      "Persistent storage",
      "Stream processing",
      "Multi-datacenter replication",
      "Exactly-once semantics"
    ],
    technicalDetails: [
      "Apache Kafka 3.6",
      "ZooKeeper coordination",
      "Multi-broker cluster",
      "Topic replication",
      "Consumer groups",
      "SASL/SSL authentication"
    ],
    useCases: [
      "Event-Driven Architecture",
      "Log Aggregation",
      "Stream Processing",
      "Microservices Communication"
    ]
  },
  {
    id: "elasticsearch",
    title: "Elasticsearch",
    description: "موتور جستجوی قدرتمند برای Big Data",
    longDescription: "Elasticsearch یک موتور جستجو و analytics توزیع‌شده است که برای جستجوی سریع در حجم عظیم داده طراحی شده است. با قابلیت full-text search.",
    category: "search",
    logo: elasticsearchLogo,
    price: "200,000",
    specs: {
      ram: "16 GB",
      storage: "300 GB SSD",
      cpu: "4 vCore",
      bandwidth: "3 TB"
    },
    features: [
      "Full-text search قدرتمند",
      "Real-time indexing",
      "Distributed و Scalable",
      "RESTful API",
      "Aggregations و Analytics",
      "Kibana dashboard"
    ],
    technicalDetails: [
      "Elasticsearch 8.11",
      "Multi-node cluster",
      "Automatic sharding",
      "Index lifecycle management",
      "Security features (X-Pack)",
      "Snapshot and restore"
    ],
    useCases: [
      "Site Search",
      "Log Analytics",
      "Application Monitoring",
      "Business Intelligence"
    ]
  },
  {
    id: "vault",
    title: "HashiCorp Vault",
    description: "مدیریت امن Secrets و Encryption",
    longDescription: "HashiCorp Vault ابزاری برای ذخیره‌سازی امن و دسترسی به secrets، passwords، certificates و encryption keys است.",
    category: "security",
    logo: vaultLogo,
    price: "180,000",
    specs: {
      ram: "4 GB",
      storage: "50 GB SSD",
      cpu: "2 vCore",
      bandwidth: "1 TB"
    },
    features: [
      "Secrets Management مرکزی",
      "Dynamic Secrets",
      "Encryption as a Service",
      "Access Control دقیق",
      "Audit Logging کامل",
      "High Availability"
    ],
    technicalDetails: [
      "Vault 1.15",
      "Integrated storage",
      "Auto-unseal support",
      "PKI secrets engine",
      "Token authentication",
      "Transit secrets engine"
    ],
    useCases: [
      "API Key Management",
      "Database Credentials",
      "TLS Certificate Management",
      "Encryption Services"
    ]
  },
  {
    id: "prometheus",
    title: "Prometheus + Grafana",
    description: "مانیتورینگ و Alerting حرفه‌ای",
    longDescription: "Prometheus یک سیستم مانیتورینگ و alerting open-source است که با Grafana برای ایجاد داشبوردهای زیبا ترکیب شده است.",
    category: "monitoring",
    logo: prometheusLogo,
    price: "140,000",
    specs: {
      ram: "8 GB",
      storage: "200 GB SSD",
      cpu: "4 vCore",
      bandwidth: "2 TB"
    },
    features: [
      "Time-series Database",
      "PromQL query language",
      "Multi-dimensional data model",
      "Alertmanager integration",
      "Grafana dashboards",
      "Service Discovery"
    ],
    technicalDetails: [
      "Prometheus 2.48",
      "Grafana 10.2",
      "Alertmanager included",
      "Node exporter",
      "Remote storage support",
      "HA configuration"
    ],
    useCases: [
      "Infrastructure Monitoring",
      "Application Metrics",
      "Alerting Systems",
      "Performance Analysis"
    ]
  }
];
